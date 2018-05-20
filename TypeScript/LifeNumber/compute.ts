class star {
    month: number
    date: number
    name: string
}
let starlist = [
    <star>{ month: 1, date: 20, name: "摩羯座 capricorn.json" },
    <star>{ month: 2, date: 19, name: "水瓶座 aquarius-json" },
    <star>{ month: 3, date: 20, name: "雙魚座 pisces.json" },
    <star>{ month: 4, date: 19, name: "牡羊座 aries.json" },
    <star>{ month: 5, date: 20, name: "金牛座 taurus.json" },
    <star>{ month: 6, date: 21, name: "雙子座 gemini.json" },
    <star>{ month: 7, date: 22, name: "巨蟹座 cancer.json" },
    <star>{ month: 8, date: 22, name: "獅子座 leo.json" },
    <star>{ month: 9, date: 22, name: "處女座 virgo.json" },
    <star>{ month: 10, date: 23, name: "天秤座 libra.json" },
    <star>{ month: 11, date: 21, name: "天蠍座 scorpio.json" },
    <star>{ month: 12, date: 20, name: "人馬座 sagittarius.json" },
]
class LifeNumber {
    year: number;
    month: number;
    date: number;
    mystar: string;
    constructor(_year: string, _month: string, _date: string) {
        this.year = this.calcutate(_year);
        this.month = this.calcutate(_month);
        this.date = this.calcutate(_date);
        this.mystar = this.getStar(_month, _date);
    }
    calcutate(str: string): number {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            count += parseInt(str[i])
        }
        return count
    }
    getStar(m: string, d: string): string {
        console.log(m, d + "???")
        for (var i = 0; i < starlist.length - 1; i++) {
            if (parseInt(m) == starlist[i].month) {
                if (parseInt(d) > starlist[i].date) {
                    return starlist[i + 1].name
                }
                else {
                    return starlist[i].name;
                }
            }
        }
        return starlist[0].name;
    }
    getLifeNumber(): number {
        let all = this.year + this.month + this.date
        return this.setLiftNumber(all)
    }
    setLiftNumber(num: number): number {
        if (num > 10) {
            num = this.setLiftNumber(this.calcutate(num.toString()))
        }
        return num;
    }
}
