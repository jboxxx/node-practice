## Match
#### Properties
```
Match             - object
Match.id          - int
Match.date        - datetime
Match.result      - boolean
Match.classes     - array
Match.stats       - object
  stats.damage    - int
  stats.healing   - int
  stats.takedowns - int
  stats.deaths    - int
  stats.accuracy  - float
  stats.objective - int
```

#### Methods
```javascript
Match.create = function ( date, result, classes, stats ) { return Match }

Match.edit = function ( mid, [date, result, classes, stats] ) { return Match }

Match.delete = function ( mid ) { return Match }
```

