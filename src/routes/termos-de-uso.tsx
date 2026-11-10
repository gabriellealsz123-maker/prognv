import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, PendingInformation, legalHead } from "@/components/privacy/legal-page";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => legalHead("Termos de Uso", "Condições de utilização e limites das informações do site da Pro GNV."),
  component: TermsPage,
});

function TermsPage() {
  return <LegalPage title="Termos de Uso">
    <PendingInformation>
      <li>Confirmar razão social, CNPJ (se aplicável) e responsável pelo atendimento.</li>
      <li>Informar preços reais, condições de pagamento, capacidades incluídas e garantias de cada kit. Valores e garantias de exemplo foram removidos.</li>
      <li>Validar identificação e alcance do registro/homologação, condições de inspeção e regularização e demais alegações comerciais já divulgadas.</li>
      <li>Confirmar políticas de orçamento, contratação, cancelamento e atendimento, sem limitar direitos obrigatórios.</li>
    </PendingInformation>
    <section><h2>1. Uso do site</h2><p>O site apresenta informações sobre instalação, requalificação e manutenção de GNV e permite entrar em contato com a Pro GNV. Não há contratação, pagamento, agendamento confirmado ou cadastro online. Uma conversa ou solicitação de orçamento não representa, por si só, a conclusão de um contrato.</p></section>
    <section><h2>2. Informações e orçamento</h2><p>O orçamento deve identificar o veículo, a configuração proposta, os componentes, serviços, valores, pagamento, prazos e condições efetivamente oferecidos. As imagens dos kits são referências visuais e a configuração precisa ser verificada no atendimento. Não há preço ou prazo de garantia informado nestes termos.</p><p>A adequação de cilindros e kits depende de avaliação técnica e das exigências aplicáveis. Este texto não confirma registro, homologação, benefício fiscal, economia garantida ou resultado individual. Alegações comerciais existentes precisam ser verificadas pelo responsável antes da publicação final.</p></section>
    <section><h2>3. Links e serviços externos</h2><p>WhatsApp, Google Maps, e-mail e telefone dependem dos serviços e aplicativos escolhidos pelo visitante. Seus próprios termos e regras de privacidade se aplicam ao uso desses serviços. Consulte a Política de Privacidade para conhecer os meios de contato e a medição de visitas.</p></section>
    <section><h2>4. Uso responsável e disponibilidade</h2><p>Não utilize o site para tentativas de acesso indevido, envio de conteúdo ilícito ou ações que comprometam sua segurança e disponibilidade. O site pode passar por manutenção ou apresentar indisponibilidade. Isso não afasta responsabilidades legais nem direitos relacionados a serviços contratados.</p></section>
    <section><h2>5. Direitos e atendimento</h2><p>Estes termos não excluem garantias legais, responsabilidade obrigatória ou direitos previstos no Código de Defesa do Consumidor e na legislação aplicável. Para informações ou dúvidas sobre serviços, utilize os contatos divulgados no site: <a href="mailto:contatoprognv@hotmail.com">contatoprognv@hotmail.com</a> ou WhatsApp (41) 8890-5279.</p></section>
  </LegalPage>;
}