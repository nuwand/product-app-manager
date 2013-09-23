var schema=function(){
    return{
        name:'resource',
        fields:[
            {
                name:'uuid',
                type:'varchar',
                length:180
            },
            {
                name:'content',
                type:'blob'
            },
            {
                name:'name',
                type:'varchar'
            }
        ]
    }
};