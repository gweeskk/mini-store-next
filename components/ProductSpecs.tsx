import type { ProductSpecs as ProductSpecsType } from "@/types/product";

const specsLabels: Record<string, string> = {
  display: "Дисплей",
  memory: "Память",
  color: "Цвет",
  storage: "Хранилище",
  connection: "Подключение",
  type: "Тип",
  resolution: "Разрешение",
};

type ProductSpecsProps = {
  specs: ProductSpecsType;
};

export default function ProductSpecs({ specs }: ProductSpecsProps) {
  return (
    <div>
      <h2 className="specsTitle">Характеристики</h2>
      <ul className="specsList">
        {Object.entries(specs).map(([key, value]) => (
          <li key={key} className="specsItem">
            <strong>{specsLabels[key] ?? key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}