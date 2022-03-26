### 使用内存模式

NutsDB从0.7.0版本开始支持内存模式，这个模式下，重启数据库，数据会丢失的。

例子：

```go

	opts := inmemory.DefaultOptions
	db, err := inmemory.Open(opts)
	if err != nil {
		panic(err)
	}
	bucket := "bucket1"
	key := []byte("key1")
	val := []byte("val1")
	err = db.Put(bucket, key, val, 0)
	if err != nil {
		fmt.Println("err", err)
	}

	entry, err := db.Get(bucket, key)
	if err != nil {
		fmt.Println("err", err)
	}

	fmt.Println("entry.Key", string(entry.Key))     // entry.Key key1
	fmt.Println("entry.Value", string(entry.Value)) // entry.Value val1
	
```
