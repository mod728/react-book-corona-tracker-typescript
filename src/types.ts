// type
export type CountryDataType = {
    date: string,
    weekday: string,
    totalConfirmed: string,
    start: string,
    totalRecovered: string,
    starthour:string
}
  
type CountriesJsonType = {		
    Country: string,                    
    Slug: string,			
}[]

export type ExamPageType = {
    countriesJson: CountriesJsonType,		
    setDatas: React.Dispatch<React.SetStateAction<never[]>>,
   	
    datas: never[],
}

export type SelectorType = {	
    setDatas: React.Dispatch<React.SetStateAction<never[]>>,
    datas:never[]
}

export type ResultsType = {		
    countryData: CountryDataType,
        		               
}
export type ButtoneType={
    Mail:() => void
    Excel:() => void
    password: string
}

// interface
interface SingleCountriesDataType {
    day: string,		
    weekday: string,		
    other: string,	
    start:string
    end :string
    halftime:string
    worktime:string
}
  
export interface workingDataType extends Array<SingleCountriesDataType> {}

export interface TopPageType {						
    workingData: Array<SingleCountriesDataType>
    setEmail:React.Dispatch<React.SetStateAction<string>>
    getList2:(e:any)=>void;
    setworkingData: React.Dispatch<React.SetStateAction<workingDataType>>
    setPassword:React.Dispatch<React.SetStateAction<string>>
    Mail:() => void
    Excel:() => void
    password:string
    setOther:React.Dispatch<React.SetStateAction<string>>
    Senddata:(e: React.ChangeEvent<HTMLInputElement>) => void
    other:string
    email:string
    // Senddata:(e: React.FormEvent<HTMLFormElement>) => void
    //test: (e: React.ChangeEvent<HTMLFormElement>) => void
}

export interface ListType {						
    workingData: Array<SingleCountriesDataType>
    //test:(e: React.ChangeEvent<HTMLFormElement>) => void
    setOther:React.Dispatch<React.SetStateAction<string>>
    Senddata:(e: React.ChangeEvent<HTMLInputElement>) => void
    // Senddata:(e: React.FormEvent<HTMLFormElement>) => void
}