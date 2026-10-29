// Textos das políticas, revisados em 29/10/2026 com os dados de src/config/site.ts.
// Revise com assessoria jurídica antes de abrir as vendas. Os trechos entre
// [colchetes] só aparecem se a constante correspondente estiver vazia.

import { LEGAL_UPDATED_AT, SELLER_NAME, SUPPORT_EMAIL } from '../config/site'

const seller = SELLER_NAME || '[nome do responsável pela venda]'
const contact = SUPPORT_EMAIL || '[e-mail de suporte]'
const updated = LEGAL_UPDATED_AT || '[data da última atualização]'

export type LegalDoc = {
  id: 'privacidade' | 'termos' | 'reembolso'
  title: string
  sections: { heading: string; body: string[] }[]
}

export const LEGAL_DOCS: LegalDoc[] = [
  {
    id: 'privacidade',
    title: 'Política de Privacidade',
    sections: [
      {
        heading: 'Dados no aplicativo',
        body: [
          'O My Inner World armazena tarefas, emoções, diário, histórico e dados de perfil localmente, no computador onde está instalado.',
          `Esses dados não são enviados a servidores de ${seller}. O cadastro e o login acontecem no próprio dispositivo, e o aplicativo não exige conexão permanente com a internet para funcionar.`,
        ],
      },
      {
        heading: 'Segurança dos dados',
        body: [
          'Os dados ficam em um banco SQLite local que não é criptografado. Qualquer pessoa com acesso aos arquivos da sua conta no computador pode, em tese, lê-los.',
          'Você é responsável pela segurança do seu computador. Recomenda-se protegê-lo com senha e guardar as cópias de segurança geradas pelo aplicativo em local seguro.',
        ],
      },
      {
        heading: 'Dados neste site',
        body: [
          'Este site é estático: não possui formulários, contas de usuário nem banco de dados, e não coleta dados pessoais.',
          'O site é hospedado no GitHub Pages. O provedor de hospedagem pode registrar dados técnicos de acesso, como o endereço IP, conforme a sua própria política de privacidade.',
        ],
      },
      {
        heading: 'Pagamentos',
        body: [
          'As vendas ainda não foram abertas. Quando forem, o pagamento será processado por uma plataforma externa, que tratará os dados do comprador conforme a sua própria política de privacidade.',
          `Nem este site nem ${seller} armazenam dados de cartão ou de pagamento.`,
        ],
      },
      {
        heading: 'Contato',
        body: [`Responsável: ${seller}.`, `Dúvidas sobre privacidade: ${contact}.`, `Última atualização: ${updated}.`],
      },
    ],
  },
  {
    id: 'termos',
    title: 'Termos de Uso',
    sections: [
      {
        heading: 'Licença de uso',
        body: [
          `Ao adquirir o My Inner World, você recebe uma licença pessoal e intransferível para instalar e usar o aplicativo, concedida por ${seller}.`,
          'O pagamento é único. Não há assinatura nem cobrança recorrente.',
        ],
      },
      {
        heading: 'Requisitos',
        body: [
          'O aplicativo foi desenvolvido para Windows x64. Verifique a compatibilidade antes da compra.',
          'Depois de instalado, o aplicativo funciona sem conexão permanente com a internet.',
        ],
      },
      {
        heading: 'Responsabilidades',
        body: [
          'O My Inner World é uma ferramenta de organização pessoal e não substitui acompanhamento médico ou psicológico.',
          'Os dados ficam no seu computador, em um banco local não criptografado. Recomenda-se proteger o computador e manter cópias de segurança periódicas.',
        ],
      },
      {
        heading: 'Contato',
        body: [`Responsável: ${seller}.`, `Suporte: ${contact}.`, `Última atualização: ${updated}.`],
      },
    ],
  },
  {
    id: 'reembolso',
    title: 'Política de Reembolso',
    sections: [
      {
        heading: 'Direito de arrependimento',
        body: [
          'Compras realizadas pela internet podem ser canceladas em até 7 dias, contados da compra ou do recebimento do produto, conforme o art. 49 do Código de Defesa do Consumidor.',
        ],
      },
      {
        heading: 'Como solicitar',
        body: [
          `Envie a solicitação para ${contact} informando o e-mail usado na compra. O estorno é feito pela plataforma de pagamento utilizada, conforme os prazos dela.`,
        ],
      },
      {
        heading: 'Atualização',
        body: [`Responsável: ${seller}.`, `Última atualização: ${updated}.`],
      },
    ],
  },
]
