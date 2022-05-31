//  mediator pattern allows to define mediator object that encapsualtes and controls some set of objects interact with each other

// example chat room where members use chatroom as mediator to send message to and from
function Member(name){
    this.name=name;
    this.chatRoom=null;
}


Member.prototype={
    send:function(message,toMember){
        //params => msg,currentmember is this,tomember
        this.chatRoom.send(message,this,toMember)
    },
    recieve:function(message,fromMember){
        console.log(`${fromMember.name} to ${this.name} : ${message}`)
    }
}


// mediator Object
function Chatroom(){
    this.members={};
}

Chatroom.prototype={
    addMember:function(member){
        this.members[member.name] = member;
        member.chatRoom=this;
    },
    send: function(message,fromMember,toMember){
        toMember.recieve(message,fromMember)
    }
}

const chat = new Chatroom();
const bob = new Member("Bob");
const john = new Member("John");

chat.addMember(bob);
chat.addMember(john)
bob.send("Hello JOHN",john)
john.send("Hello Bob",bob)




