# Docker && Node.js && MongoDB

### Using the enviroment variable

```sh

$ echo $UID

$ export $UID

```

### Give writing permissions to docker 

```sh

$ sudo chmod 666 /var/run/docker.sock

```

### List docker container

- $ docker ps -a

### List db && cache with docker in interactive mode

```sh
docker exec -it labobxl_db_1  mongo -u admin -p secret labo
```
```sh
docker exec -it labobxl_cache_1 redis-cli -a secret
```
$ scan0
$ get 

### POST on localhost

```sh
$ curl -X POST localhost:3000/register
```

```sh
$ curl -v -X POST localhost:3000/register -H 'Content-Type: application/json' \
-d '{ "email": "michel@gmail.com", "name": "Michel", "password": "Secret12", "passwordConfirmation": "Secret12" }'
```

```sh
$ curl -v -X POST localhost:3000/login -H 'Content-Type: application/json' \
-d '{ "email": "thdepas@gmail.com", "password": "Secret12" }'
```
```sh
curl localhost:3000/home --cookie 'ano=s%3ANZYuYV7l3hw9yvvzPtr-kGikpwst0hTa.3BHnFdYTbP2WHEEq8BspsxbgPg3FHsLbLDyfKDOU9ng'
```

## moongoose functions

```sh

db.users.find({}).pretty()
db.products.find({})
create a new db_object: object.save()
find a db_objec by id: findById(id)
retrieve all db_objec: find()
update a db_objec by id: findByIdAndUpdate(id, data)
remove a db_objec: findByIdAndRemove(id)
remove all db_objec: deleteMany()

```
