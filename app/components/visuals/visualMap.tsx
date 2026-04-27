import {
  NewBusinessIcon,
  CompetitorIcon,
  SuspendedIcon,
} from "./SituationIcons";
import { StepChatIcon, StepCameraIcon, StepCheckIcon } from "./StepIcons";

type IconComponent = React.ComponentType<{ className?: string }>;

export const situationIconById: Record<string, IconComponent> = {
  cadastro: NewBusinessIcon,
  otimizacao: CompetitorIcon,
  recuperacao: SuspendedIcon,
};

export const stepIconByNumber: Record<string, IconComponent> = {
  "01": StepChatIcon,
  "02": StepCameraIcon,
  "03": StepCheckIcon,
};
