import type { Schema, Struct } from '@strapi/strapi';

export interface InformeTrimestralInformeTrimestral
  extends Struct.ComponentSchema {
  collectionName: 'components_informe_trimestral_informe_trimestrals';
  info: {
    displayName: 'informe-trimestral';
    icon: 'filePdf';
  };
  attributes: {
    primer_trimestre: Schema.Attribute.Media<'files'>;
    segundo_trimestre: Schema.Attribute.Media<'files'>;
    tercer_trimestre: Schema.Attribute.Media<'files'>;
    total: Schema.Attribute.Media<'files'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'informe-trimestral.informe-trimestral': InformeTrimestralInformeTrimestral;
    }
  }
}
