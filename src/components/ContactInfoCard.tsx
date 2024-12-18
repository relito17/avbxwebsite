import { LucideIcon } from 'lucide-react';

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  info: string;
  subInfo?: string;
}

export default function ContactInfoCard({ icon: Icon, title, info, subInfo }: ContactInfoCardProps) {
  return (
    <div className="hover-scale flex flex-col items-center p-8 bg-white rounded-lg shadow-lg">
      <Icon className="h-10 w-10 text-blue-500" />
      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{info}</p>
      {subInfo && <p className="text-sm text-gray-400">{subInfo}</p>}
    </div>
  );
}