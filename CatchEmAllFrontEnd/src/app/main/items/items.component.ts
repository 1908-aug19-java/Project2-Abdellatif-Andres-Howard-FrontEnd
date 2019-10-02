import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeserviceService } from 'src/app/services/pokeservice.service';
import { PostService } from 'src/app/services/post.service';
import { ɵangular_packages_platform_browser_dynamic_testing_testing_a } from '@angular/platform-browser-dynamic/testing';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
one: any;
masterball="";
two:any;
ultraball="";
three:any;
greatball="";
four:any;
pokeball="";
five:any;
safariball="";
six:any;
netball="";
seven:any;
diveball="";
eight:any;
nestball="";
nine:any;
repeatball="";
ten:any;
timerball="";
eleven:any;
luxuryball="";
twelve:any;
premierball="";
thirteen:any;
duskball="";
fourteen:any;
healball="";
fithteen:any;
quickball="";



  constructor(private http: HttpClient) { }


  ngOnInit() {
{
  let obs=this.http.get("https://pokeapi.co/api/v2/item/1/");
  obs.subscribe((one)=>{
    this.one=one;
    
    this.masterball=this.one.sprites.default;

  })
  {
    let obs=this.http.get("https://pokeapi.co/api/v2/item/2/");
    obs.subscribe((two)=>{
      this.two=two;
      
      this.ultraball=this.one.sprites.default;
  
    })
    {
      let obs=this.http.get("https://pokeapi.co/api/v2/item/3/");
      obs.subscribe((three)=>{
        this.three=three;
        
        this.greatball=this.one.sprites.default;
    
      })
      {
        let obs=this.http.get("https://pokeapi.co/api/v2/item/4/");
        obs.subscribe((four)=>{
          this.four=four;
          
          this.pokeball=this.one.sprites.default;
      
        })
        {
          let obs=this.http.get("https://pokeapi.co/api/v2/item/5/");
          obs.subscribe((five)=>{
            this.five=five;
            
            this.safariball=this.one.sprites.default;
        
          })
          {
            let obs=this.http.get("https://pokeapi.co/api/v2/item/6/");
            obs.subscribe((six)=>{
              this.six=six;
              
              this.netball=this.one.sprites.default;
          
            })
            {
              let obs=this.http.get("https://pokeapi.co/api/v2/item/7/");
              obs.subscribe((seven)=>{
                this.seven=seven;
                
                this.diveball=this.one.sprites.default;
            
              })
              {
                let obs=this.http.get("https://pokeapi.co/api/v2/item/8/");
                obs.subscribe((eight)=>{
                  this.eight=eight;
                  
                  this.nestball=this.one.sprites.default;
              
                })
                {
                  let obs=this.http.get("https://pokeapi.co/api/v2/item/9/");
                  obs.subscribe((nine)=>{
                    this.nine=nine;
                    
                    this.repeatball=this.one.sprites.default;
                
                  })
                  {
                    let obs=this.http.get("https://pokeapi.co/api/v2/item/10/");
                    obs.subscribe((ten)=>{
                      this.ten=ten;
                      
                      this.timerball=this.one.sprites.default;
                  
                    })
                    {
                      let obs=this.http.get("https://pokeapi.co/api/v2/item/11/");
                      obs.subscribe((eleven)=>{
                        this.eleven=eleven;
                        
                        this.luxuryball=this.one.sprites.default;
                    
                      })
                      {
                        let obs=this.http.get("https://pokeapi.co/api/v2/item/12/");
                        obs.subscribe((twelve)=>{
                          this.twelve=twelve;
                          
                          this.premierball=this.one.sprites.default;
                      
                        })
                        {
                          let obs=this.http.get("https://pokeapi.co/api/v2/item/13/");
                          obs.subscribe((thirteen)=>{
                            this.thirteen=thirteen;
                            
                            this.duskball=this.one.sprites.default;
                        
                          })
                          {
                            let obs=this.http.get("https://pokeapi.co/api/v2/item/14/");
                            obs.subscribe((fourteen)=>{
                              this.fourteen=fourteen;
                              
                              this.healball=this.one.sprites.default;
                          
                            })
                            {
                              let obs=this.http.get("https://pokeapi.co/api/v2/item/15/");
                              obs.subscribe((fithteen)=>{
                                this.fithteen=fithteen;
                                
                                this.quickball=this.one.sprites.default;
                            
                              })
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
}
}
