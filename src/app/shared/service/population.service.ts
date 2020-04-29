import { Injectable } from '@angular/core';

export interface Population{
    year: Date;
    population:number
}

@Injectable({providedIn:'root'})
export class PopulationService {
    populationInTotal: Population[] = [
        {year:new Date('1949'), population:54167},
        {year:new Date('1950'), population:55196},
        {year:new Date('1951'), population:56300},
        {year:new Date('1955'), population:61465},
        {year:new Date('1960'), population:66207},
        {year:new Date('1965'), population:72538},
        {year:new Date('1970'), population:82992},
        {year:new Date('1971'), population:85229},
        {year:new Date('1972'), population:87177},
        {year:new Date('1973'), population:89211},
        {year:new Date('1974'), population:90859},
        {year:new Date('1975'), population:92420},
        {year:new Date('1976'), population:93717},
        {year:new Date('1977'), population:94974},
        {year:new Date('1978'), population:96259},
        {year:new Date('1979'), population:97542},
        {year:new Date('1980'), population:98705},
        {year:new Date('1981'), population:100072},
        {year:new Date('1982'), population:101654},
        {year:new Date('1983'), population:103008},
        {year:new Date('1984'), population:104357},
        {year:new Date('1985'), population:105851},
        {year:new Date('1986'), population:107507},
        {year:new Date('1987'), population:109300},
        {year:new Date('1988'), population:111026},
        {year:new Date('1989'), population:112704},
        {year:new Date('1990'), population:114333},
        {year:new Date('1991'), population:115823},
        {year:new Date('1992'), population:117171},
        {year:new Date('1993'), population:118517},
        {year:new Date('1994'), population:119850},
        {year:new Date('1995'), population:121121},
        {year:new Date('1996'), population:122389},
        {year:new Date('1997'), population:123626},
        {year:new Date('1998'), population:124761},
        {year:new Date('1999'), population:125786},
        {year:new Date('2000'), population:126743},
        {year:new Date('2001'), population:127627},
        {year:new Date('2002'), population:128453},
        {year:new Date('2003'), population:129227},
        {year:new Date('2004'), population:129988},
        {year:new Date('2005'), population:130756},
        {year:new Date('2006'), population:131448},
        {year:new Date('2007'), population:132129},
        {year:new Date('2008'), population:132802},
        {year:new Date('2009'), population:133450},
        {year:new Date('2010'), population:134091},
        {year:new Date('2011'), population:134735},
        {year:new Date('2012'), population:135404},
        {year:new Date('2013'), population:136072},
        {year:new Date('2014'), population:136782},
        {year:new Date('2015'), population:137462},
        {year:new Date('2016'), population:138271},
        {year:new Date('2017'), population:139008},
        {year:new Date('2018'), population:139538},
    ]

    get getPopulationInTotal(){
        return this.populationInTotal
    }
}