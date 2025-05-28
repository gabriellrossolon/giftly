export type Gift = {
  id: string;
  name: string;
  giftTo: string;
  category:
    | "Natal"
    | "Aniversário"
    | "Dia dos Namorados"
    | "Dia das Mães"
    | "Dia dos Pais"
    | "Dia das Crianças"
    | "Páscoa"
    | "Outros";
  bought: boolean;
};
