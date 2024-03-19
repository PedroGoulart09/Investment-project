import { boldInvestment, conservativeInvestment, moderateInvestment } from "@/app/utils/constants";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";


type Profile = {
  description: string;
  kindOfProfile: string;
  hopeReturn: string;
}

export default function InfoProfile({ description, kindOfProfile, hopeReturn }: Profile) {
  return (
    <div className="flex justify-between space-y-4 max-sm:flex-col">
      <div className="flex flex-col space-y-3 justify-start">
        <p className="text-2xl mt-9">Características</p>
        <hr className="w-72" />
        <p className="text-sm text-slate-200">Concentração em Renda variável</p>
        <hr className="w-72" />
        <p className="text-sm text-slate-200">Tolerância a oscilações</p>
        <hr className="w-72" />
        <p className="text-sm text-slate-200">Aversão a riscos</p>
        <hr className="w-72" />
        <p className="text-sm text-slate-200">Foco em dividendos</p>
        <hr className="w-72" />
        <p className="text-sm text-slate-200">Potencial de valorização</p>

        <p className="text-2xl">Descrição do Perfil {kindOfProfile}</p>
        <p className="text-sm w-96 max-sm:w-72" style={{ color: '#999999' }}>{description}</p>
      </div>
      <div>
        <Table className="w-[600px]">
          <TableCaption className="text-start" style={{ color: '#999999' }}>{hopeReturn}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">classe de ativo</TableHead>
              <TableHead>alocação estratégica</TableHead>
              <TableHead>alocação tática</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {kindOfProfile.split(' ')[0] === 'Conservador' && conservativeInvestment.map((asset, index) => (
              <TableRow key={index}>
                <TableCell>{asset.assetClass}</TableCell>
                <TableCell>{asset.allocation}</TableCell>
                <TableCell>{asset.targetAllocation}</TableCell>
              </TableRow>
            ))}
            {kindOfProfile.split(' ')[0] === 'Moderado' && moderateInvestment.map((asset, index) => (
              <TableRow key={index}>
                <TableCell>{asset.assetClass}</TableCell>
                <TableCell>{asset.allocation}</TableCell>
                <TableCell>{asset.targetAllocation}</TableCell>
              </TableRow>
            ))}
            {kindOfProfile.split(' ')[0] === 'Arrojado' && boldInvestment.map((asset, index) => (
              <TableRow key={index}>
                <TableCell>{asset.assetClass}</TableCell>
                <TableCell>{asset.allocation}</TableCell>
                <TableCell>{asset.targetAllocation}</TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </div>
    </div>
  );
};
