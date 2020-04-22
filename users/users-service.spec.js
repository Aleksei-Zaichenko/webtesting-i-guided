const {validate} = require('./users-service');

describe('.users-service.js',()=>{
    describe('.validate', function (){
        it('a user should have a username and a password', ()=>{
            expect(validate({})).toBe(false);
            expect(validate({username: 'sam'})).toBe(false);
            expect(validate({password: 'pass'})).toBe(false);
        });

        it('should return true when the user has a username and a password', ()=>{
            expect(validate({username: 'sam', password: 'pass'})).toBe(true);
        });
    })
})