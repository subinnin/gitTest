class Server{
    constructor(id){
        this.id = id;
        this.express = null;
        this.app = null;
        this.mysql = null;
        this.cors = null;
    }
    init(){
        this.express = require('express');
        this.app = this.express();
        this.mysql = require('mysql2');
        this.cors = require('cors');
        this.bodyParser = require('body-parser');
        require('dotenv').config();
    }
    use(){
        this.app.use(this.cors());
        this.app.use(this.express.json());
        this.app.use(this.bodyParser.json());
    }
    connectDB(){
        this.db = this.mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password : process.env.DB_PASSWORD,
            database : process.env.DB_DATABASE
        })
        this.db.connect((err) =>{
            if(err){
                console.log('DB 연결 실패', err);
            }else{
                console.log('DB 연결 성공!');
            }
        });
    }
    showDB(){
        this.app.get('/guest', (req, res)=>{
            const query = 'SELECT * FROM guest order by created_at desc';
            this.db.query(query, (err, result)=>{
                res.json(result);
            })
        })
    }
    create(){
        this.app.post('/guest', (req, res)=>{
            const {name, message} = req.body;
            console.log(name, message);
            const query = 'INSERT INTO guest (name, message) Values (?, ?)';
            this.db.query(query,[name, message], (err)=>{
                 
                    if(err) return res.status(500).send(err);
                })
        })
    }
    connectPort(){
        this.app.listen(8080, ()=>{
            console.log('8080번 포트 open!')
        })
    }
    run(){
        this.init();
        this.use();
        this.connectDB();
        this.showDB();
        this.create();
        this.connectPort();
    }
}
const server = new Server('server');
server.run();
