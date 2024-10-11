export interface IListViewProps {
  marker?: string;
  border?:boolean;
  actionInput?: number;
  avatar?:{src:string,shape:number,size:string} | undefined,
  disabled?:boolean,
  isActive?:boolean
  };
  export interface IDefaultValue {
    Avatar: {
      src: string;
      shape: number;
      size: string;
    };
  }

