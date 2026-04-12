import { NextRequest, NextResponse } from 'next/server';

interface BrevoContact {
  email: string;
  attributes: {
    FIRSTNAME: string;
    MESSAGE: string;
  };
  listIds?: number[];
  updateEnabled?: boolean;
}

interface RequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();
    const { name, email, message } = body;

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Todos os campos são obrigatórios.' },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Email inválido.' },
        { status: 400 }
      );
    }

    // API Key do Brevo (deve estar em .env.local)
    const brevoApiKey = process.env.BREVO_API_KEY;

    if (!brevoApiKey) {
      console.error('BREVO_API_KEY não está configurada');
      return NextResponse.json(
        { message: 'Configuração do servidor incompleta. Entre em contato com o suporte.' },
        { status: 500 }
      );
    }

    // ID da lista do Brevo (opcional - pode ser configurado via .env)
    const listId = process.env.BREVO_LIST_ID ? parseInt(process.env.BREVO_LIST_ID) : undefined;

    // Preparar dados para o Brevo
    const brevoContact: BrevoContact = {
      email: email,
      attributes: {
        FIRSTNAME: name,
        MESSAGE: message,
      },
      updateEnabled: true, // Atualiza o contato se já existir
    };

    // Adicionar lista se configurada
    if (listId) {
      brevoContact.listIds = [listId];
    }

    // Fazer requisição para a API do Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify(brevoContact),
    });

    // Brevo retorna 201 para novo contato (com body) ou 204 para atualização (sem body)
    if (response.status === 201) {
      const responseData = await response.json();
      return NextResponse.json(
        {
          success: true,
          message: 'Cadastro realizado com sucesso!',
          data: responseData,
        },
        { status: 200 }
      );
    }

    if (response.status === 204) {
      return NextResponse.json(
        {
          success: true,
          message: 'Cadastro realizado com sucesso!',
        },
        { status: 200 }
      );
    }

    // Para outros status, tentar parsear o body de erro
    const responseData = await response.json();

    // Se o contato já existe (código 400 com message específica), tratamos como sucesso
    if (response.status === 400 && responseData.message?.includes('Contact already exist')) {
      return NextResponse.json(
        {
          success: true,
          message: 'Este email já está cadastrado. Você receberá as informações em breve.',
          data: responseData,
        },
        { status: 200 }
      );
    }

    // Erro da API do Brevo
    console.error('Erro ao criar contato no Brevo:', responseData);
    return NextResponse.json(
      {
        success: false,
        message: 'Erro ao processar cadastro. Tente novamente mais tarde.',
        error: responseData,
      },
      { status: response.status }
    );

  } catch (error) {
    console.error('Erro no endpoint de cadastro:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Erro interno do servidor. Tente novamente mais tarde.',
        error: error instanceof Error ? error.message : 'Erro desconhecido',
      },
      { status: 500 }
    );
  }
}
