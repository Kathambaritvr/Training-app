

export class APIConstants {

   //public static get coursesUrl(): string { return "https://json-server-tvr-digital.appspot.com/courses/"; }
   //public static get topicsUrl(): string { return "https://json-server-tvr-digital.appspot.com/topics/"; }

   public static get coursesUrl(): string { return this.apiUrl+"courses/"; }
   public static get subjectsUrl(): string { return this.apiUrl+"subjects/"; }
   public static get topicsUrl(): string { return this.apiUrl+"/topics/subjects/"; }


   public static apiUrl = "http://localhost:8080/"
   
  
 
}