const test = require ('tape')
const request = require('supertest')
const app= require('../server')

test ('First test case',(t) => {
    t.equal(1,1)
    t.end()
})

test ('Get /students', (t) => {
    request(app).get('/students')
    .expect(200)
    .then((res) => {
        let students = res.body
        t.equal(2,students.length)
        let student = student[0]
        t.notEqual(undefined,students.id)
        t.end()
    })
})
test('POST /students', (t) => {
    request(app).post('/students')
        .send({ name: 'Kittamate',email: '58660126@go.buu.ac.th'})
        .expect(200)
        .then((res) => {
            t.equal('kittamate',student.name)
            t.end()
        })
})