class Group {
    constructor() {
        this.group = [];
    }

    add(value) {
        if (!this.group.includes(value)) this.group.push(value);
    }

    delete(value) {
        let index = this.group.indexOf(value);
        if (index >= 0) this.group = this.group.slice(0,index).concat(this.group.slice(index+1));
    }

    has(value) {
        return (this.group.indexOf(value) >= 0)
    }

    static from(iterable) {
        let newGroup = new Group();
        for (let value of iterable) {
            newGroup.add(value);
        }
        return newGroup;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this.group);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.index = 0;
    }

    next() {
        let ret_obj;
        if (this.index < this.group.length) {
            ret_obj = {
                value: this.group[this.index],
                done: false
            }
            this.index++;
        } else {
            ret_obj = {
                value: undefined,
                done: true
            }
        }
        return ret_obj;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10)); // → true
console.log(group.has(30)); // → false
group.add(10);
group.delete(10);
console.log(group.has(10)); // → false

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}