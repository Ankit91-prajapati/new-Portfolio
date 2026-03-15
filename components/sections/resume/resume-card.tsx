import { TypeIcon } from "lucide-react";

type props={
    Icon:typeof TypeIcon;
    role:string,
    company?:string,
    description?:string,
    date?:string,
    college?:string
}

const ResumeCard = ({Icon ,role ,company ,description  ,date ,college}:props) => {
  return (
    <div id ="resume" className="mt-6">
      <div className="flex items-start space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md">
      
      
      <div className="sm:w-14 sm:h-14 w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center flex-col">
        <Icon className="sm:w-8 sm:h-8 w-6 h-6 text-black dark:text-white"/>
        </div>
        <div className="flex-1">
           { date &&(
        <h1 className="mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-200 text-gray-600 w-fit sm:text-lg text-sm font-bold">{date}</h1>
       )}
       <h1 className="font-bold">{role}</h1>
       <h2>{college}</h2>
       <h2 className="text-slate-300">{company}</h2>
       <p>{description}</p>
        </div>
      
        </div>
    </div>
  );
};

export default ResumeCard;
