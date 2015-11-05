## User
#### Properties
```
User          - object
User.id       - int
User.username - string
User.password - string
User.email    - string
User.matches  - array
```

#### Methods
```javascript
User.create = function ( username, password, email ) { return User }

User.edit = function ( uid, [username, password, email] ) { return User }

User.delete = function ( uid ) { return User }
```
