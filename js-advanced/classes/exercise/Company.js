class Company{
    isInvalid(element) {
        return element==undefined || element==null || element=='';
    }

    constructor(){
        this.departments={};
    }

    addEmployee(name, salary, position, department){
        if([name, salary, position, department].some(this.isInvalid)){
            throw new Error("Invalid input!");
        }else if(salary<0){
            throw new Error("Invalid input!");
        }

        if(this.departments[department]==undefined){
            this.departments[department]=[];
        }

        let newEmployeeInfo={'name': name, 'salary': salary, 'position': position};
        this.departments[department].push(newEmployeeInfo);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment(){
        let bestAverageSalary=0;
        let bestDepartment='';
        for(let d in this.departments){
            let sumSalaries=0;
            let employeesList=this.departments[d];
            for(let emp of employeesList){
                sumSalaries+=emp.salary;
            }

            let currentAverageSalary=sumSalaries/employeesList.length;
            if(currentAverageSalary>bestAverageSalary){
                bestAverageSalary=currentAverageSalary;
                bestDepartment=d;
            }
        }

        let result=`Best Department is: ${bestDepartment}\nAverage salary: ${bestAverageSalary.toFixed(2)}\n`

        let bestEmployees=this.departments[bestDepartment];
        bestEmployees.sort((a, b)=> {
            if (a.salary === b.salary){
              return a.name < b.name ? -1 : 1
            } else {
              return a.salary < b.salary ? 1 : -1
            }
        })

        let empStrings=[]
        for(let emp of bestEmployees){
            empStrings.push(`${emp.name} ${emp.salary} ${emp.position}`);
        }

        result+=empStrings.join('\n');

        return result;
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());