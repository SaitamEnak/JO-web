export const links = {
  manual: '',
  salaDespierta: '',
  marcaPersonal: '',
  vipFull: '',
  vipProceso: '',
  comunidadWhatsapp: '',
  youtube: '',
  instagram: '',
  tiktok: '',
  spotify: '',
} as const;

export type LinkKey = keyof typeof links;
