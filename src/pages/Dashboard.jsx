import Header from "../components/Header";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="w-full p-6">
      <Header title="Dashboard" />

      <div className="grid grid-cols-3 gap-6">
        <Card title="Mensagens enviadas" value="128" />
        <Card title="Conversões Shopee" value="39" />
        <Card title="Automações Ativas" value="3" />
      </div>
    </div>
  );
}
