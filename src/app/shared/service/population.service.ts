import { Injectable } from '@angular/core';

export interface Population{
    year: Date;
    population:number
}

export interface Rate{
    year:Date,
    birthRate:number,
    deathRate:number,
    naturalIncreaseRate:number,
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
    populationRate:Rate[]=[
        {year:new Date('1980'),birthRate:18.21,deathRate: 6.34,naturalIncreaseRate:11.87},
        {year:new Date('1981'),birthRate:20.91,deathRate: 6.36,naturalIncreaseRate:14.55},
        {year:new Date('1982'),birthRate:22.28,deathRate: 6.60,naturalIncreaseRate:15.68},
        {year:new Date('1983'),birthRate:20.19,deathRate: 6.90,naturalIncreaseRate:13.29},
        {year:new Date('1984'),birthRate:19.90,deathRate: 6.82,naturalIncreaseRate:13.08},
        {year:new Date('1985'),birthRate:21.04,deathRate: 6.78,naturalIncreaseRate:14.26},
        {year:new Date('1986'),birthRate:22.43,deathRate: 6.86,naturalIncreaseRate:15.57},
        {year:new Date('1987'),birthRate:23.33,deathRate: 6.72,naturalIncreaseRate:16.61},
        {year:new Date('1988'),birthRate:22.37,deathRate: 6.64,naturalIncreaseRate:15.73},
        {year:new Date('1989'),birthRate:21.58,deathRate: 6.54,naturalIncreaseRate:15.04},
        {year:new Date('1990'),birthRate:21.06,deathRate: 6.67,naturalIncreaseRate:14.39},
        {year:new Date('1991'),birthRate:19.68,deathRate: 6.70,naturalIncreaseRate:12.98},
        {year:new Date('1992'),birthRate:18.24,deathRate: 6.64,naturalIncreaseRate:11.60},
        {year:new Date('1993'),birthRate:18.09,deathRate: 6.64,naturalIncreaseRate:11.45},
        {year:new Date('1994'),birthRate:17.70,deathRate: 6.49,naturalIncreaseRate:11.21},
        {year:new Date('1995'),birthRate:17.12,deathRate: 6.57,naturalIncreaseRate:10.55},
        {year:new Date('1996'),birthRate:16.98,deathRate: 6.56,naturalIncreaseRate:10.42},
        {year:new Date('1997'),birthRate:16.57,deathRate: 6.51,naturalIncreaseRate:10.06},
        {year:new Date('1998'),birthRate:15.64,deathRate: 6.50,naturalIncreaseRate:9.14},
        {year:new Date('1999'),birthRate:14.64,deathRate: 6.46,naturalIncreaseRate:8.18},
        {year:new Date('2000'),birthRate:14.03,deathRate: 6.45,naturalIncreaseRate:7.58},
        {year:new Date('2001'),birthRate:13.38,deathRate: 6.43,naturalIncreaseRate:6.95},
        {year:new Date('2002'),birthRate:12.86,deathRate: 6.41,naturalIncreaseRate:6.45},
        {year:new Date('2003'),birthRate:12.41,deathRate: 6.40,naturalIncreaseRate:6.01},
        {year:new Date('2004'),birthRate:12.29,deathRate: 6.42,naturalIncreaseRate:5.87},
        {year:new Date('2005'),birthRate:12.40,deathRate: 6.51,naturalIncreaseRate:5.89},
        {year:new Date('2006'),birthRate:12.09,deathRate: 6.81,naturalIncreaseRate:5.28},
        {year:new Date('2007'),birthRate:12.10,deathRate: 6.93,naturalIncreaseRate:5.17},
        {year:new Date('2008'),birthRate:12.14,deathRate: 7.06,naturalIncreaseRate:5.08},
        {year:new Date('2009'),birthRate:11.95,deathRate: 7.08,naturalIncreaseRate:4.87},
        {year:new Date('2010'),birthRate:11.90,deathRate: 7.11,naturalIncreaseRate:4.79},
        {year:new Date('2011'),birthRate:11.93,deathRate: 7.14,naturalIncreaseRate:4.79},
        {year:new Date('2012'),birthRate:12.10,deathRate: 7.15,naturalIncreaseRate:4.95},
        {year:new Date('2013'),birthRate:12.08,deathRate: 7.16,naturalIncreaseRate:4.92},
        {year:new Date('2014'),birthRate:12.37,deathRate: 7.16,naturalIncreaseRate:5.21},
        {year:new Date('2015'),birthRate:12.07,deathRate: 7.11,naturalIncreaseRate:4.96},
        {year:new Date('2016'),birthRate:12.95,deathRate: 7.09,naturalIncreaseRate:5.86},
        {year:new Date('2017'),birthRate:12.43,deathRate: 7.11,naturalIncreaseRate:5.32},
        {year:new Date('2018'),birthRate:10.94,deathRate: 7.13,naturalIncreaseRate:3.81},
    ]

    get getPopulationInTotal(){
        return this.populationInTotal
    }

    get getPopulationRate(){
        return this.populationRate
    }
}