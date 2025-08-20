import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Client } from '../model/class/Client';
import { APIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  token = 'B6UaEK_1nfXR7Fy4jMkTiqR3wAv3a_kTPAWnveQSIRL_7FnSNrH1M-PNwBI1pr37lf_kSQ-CSR91-mLBDpBYSwBKo8y2XNMdp0_V8LJbSDLoF8-GaP9BQ5RZSt3Rrvkh2LFfjZ-6Ix6WldSchQBSVbqMzwj_1Umj3JmD_OmQmeQL5hQAREZEnFDLt1J3Fw6w24kD48GO9pMDM8EFhhV9jaQB2771gfUTrhtT-4PNY_Fempn28v0DGOfXQn_yZQyODQr6BH-9F-cRxDCht-OvTD9BQt-6kC6M7Ln3onU60a7vB9052pOgT_bMcnAviZjy3TeMiu3Nffu-dlI4eunCTVhpIYvs0OOGJwQQMwKwTBwwcERXBbSCGOC_c8Rm4uUX3cmidWnKO47PojqV5Hq2YlbKpfHvx6TGuWZ8RWWhlL9U5MtgGPrjHProCFhBRKpv4QBOk2MCi0-spYt9BmZdjl4o3Y7obsrcGxGsI-ej0NtBQW0MLVBqf8yMNNBEH_PPTxRiIythHJbiujkGWBGiy854O4BuSSJM_7NsBdv14aJ9W4tR5L1CzijEZ6lT9mjbj9dtqL9QfDGpvTXyRoBoc7kYhHc28NAj52SAaGzxfLms8zDawtAkeVk9SLlvn_HlsGiBNZ9Ak4ATeCP_p_dxEajNrKaovAXg_b3fhKB9noHiNtPOploQ_XVxwp3-onZlI0-ImmcMNbHwLY1z924r2AZ_g7a-Y_wk24-99iEiVe0O3YzShBMXN6MuUqiKvA4HN8l7rfVvz8IysIuao94IbHw1NYW6iTXXaNpE771ZnBQjJBA7TvvC0qT7RwNdLj3TPR3O9xNIyeLX9xV8lKWDvCIrnQQKA1qYjRBILsprZg6Jyf2dvCkCzJbMOjgurCOJHyA_gl32fSlUYZFNLBjEWI3_kVaRj4XDedUQdUSrdGF8qZIsi4aniv2-OAIjAkc5ovcBXPJ-3GmCBxv5FDZfdKq1P1w-N8M_0slCYazP9lKEsYg-BdblGLBkUULOnKmPpvJOihPVXBMzCdvD9fpuXCovJ9gbHda8JhANjMl-teywSMXmxtwniKHbsJzZDthOIj9jfbP_cYh43evoC4wMS3207AIrv7NezR8R7vyXlHSsiCipmvuskEXOYUDMxUuMU4tia0VigggBVnwFB_1oahPOtd6wjp5Az_MjD-U8kcqHe4ldQ7ZIEjqKcNbaeKtaC1WelSDE_cCEtHQKhZC9j__6suSZeYISrJr7B91Rl71ywlxC3EDY9a3ERst2weRJO-bHlUNKMBim8pBIKv4dPFuht2tZiGSk-qZUBTjTo-t5244pcAkTmsKWTTtvJ0SuKraYaNQb1vsxdrM-eRVhNmkC7iJ80fqFkFZOZETtZUrM_XFmzNXE9YaKDf5IiYbX_UJ873wbVvE2FvUbRTwXcZXwmvW9E9CJg-PBBiQ_a_zaea05TD2dvuDxRSdLwoIk5CrS92GdwCnZ_BJJ5VsToNjk694Ke3R9sInc4VWOxmM5ms0B-CRnlhLPhCrhA3GAT5lc5KAhbyFXwUMlt6SQaFN6ZXznDWltbbKzQeH19Twbkn8vtTwCQTBBXev-or6VJYX5nvkAyfFAWZRp2TOcZSWMXb5-zdIaWMl0IxvPPJZSpvuzEn0ImvU-rR_HRyx2GU-YuMxQwpa1D8mHq6uRQWETmJ97FZodEPHAvc9pu4qA8X66p5dq9LTlsmRYjcLINrByPo3kWjl16sxiTR15oReYKmTgCEPL-SzMAXmylFjYFV1LrwpDZsRydM5P5Klk'; // Replace with your actual token

 headers = new HttpHeaders({
  'Authorization': `Bearer ${this.token}`,
  'Content-Type': 'application/json'
});

  getComboList (): Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>('https://uat-basic.tvs-e.in//api/v1/getCombolistAPI',{
      params: {
        MerchantID: 'SmGjbbBpS2fpzcK3S4LtPQ==',
        outletid: 'ZY1LxKT4IBUot3ks+laS1Q=='
      },headers: this.headers
    })
  }

  getAllUser(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  addupdate (obj:Client): Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>('/Localapi//api/v1/AddUpdateComboOffer',obj)
  }

  deleteComboByID(id:string): Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>('/UATapi//api/v1/DeleteComboDetailsByIdAPI?Comboid='+id + 'MerchantID='+1189 + 'OutletID=' + 1196)
  }

}
