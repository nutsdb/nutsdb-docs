### 使用键值对

将key-value键值对保存在一个bucket, 你可以使用 `tx.Put` 这个方法:

* 添加数据

```golang

if err := db.Update(
	func(tx *nutsdb.Tx) error {
	key := []byte("name1")
	val := []byte("val1")
	bucket := "bucket1"
	if err := tx.Put(bucket, key, val, 0); err != nil {
		return err
	}
	return nil
}); err != nil {
	log.Fatal(err)
}

```
 * 使用TTL

NusDB支持TTL(存活时间)的功能，可以对指定的bucket里的key过期时间的设置。使用`tx.Put`这个方法的使用`ttl`参数就可以了。
如果设置 ttl = 0 或者 Persistent, 这个key就会永久存在。下面例子中ttl设置成 60 , 60s之后key就会过期，在查询的时候将不会被搜到。

```golang
if err := db.Update(
	func(tx *nutsdb.Tx) error {
	key := []byte("name1")
	val := []byte("val1")
	bucket := "bucket1"	
	// 如果设置 ttl = 0 or Persistent, 这个key就会永久不删除
	// 这边 ttl = 60 , 60s之后就会过期。
	if err := tx.Put(bucket, key, val, 60); err != nil {
		return err
	}
	return nil
}); err != nil {
	log.Fatal(err)
}
```




* 更新数据

上面的代码执行之后key为"name1"和value值"val1"被保存在命名为bucket1的bucket里面。
 
如果你要做更新操作，你可以仍然用`tx.Put`方法去执行，比如下面的例子把value的值改成"val1-modify"：

```golang
if err := db.Update(
	func(tx *nutsdb.Tx) error {
	key := []byte("name1")
	val := []byte("val1-modify") // 更新值
	bucket := "bucket1"
	if err := tx.Put(bucket, key, val, 0); err != nil {
		return err
	}
	return nil
}); err != nil {
	log.Fatal(err)
}

```

* 获取数据

获取值可以用`tx.Get` 这个方法:

```golang
if err := db.View(
func(tx *nutsdb.Tx) error {
	key := []byte("name1")
	bucket := "bucket1"
	if e, err := tx.Get(bucket, key); err != nil {
		return err
	} else {
		fmt.Println(string(e.Value)) // "val1-modify"
	}
	return nil
}); err != nil {
	log.Println(err)
}
```

* 删除数据

删除使用`tx.Delete()` 方法：

```golang
if err := db.Update(
	func(tx *nutsdb.Tx) error {
	key := []byte("name1")
	bucket := "bucket1"
	if err := tx.Delete(bucket, key); err != nil {
		return err
	}
	return nil
}); err != nil {
	log.Fatal(err)
}
```

* 获取全部的key和value

对于获取一个bucket的所有key和value，可以使用`GetAll`方法。

例子：

```go
if err := db.View(
	func(tx *nutsdb.Tx) error {
		bucket := "user_list"
		entries, err := tx.GetAll(bucket)
		if err != nil {
			return err
		}

		for _, entry := range entries {
			fmt.Println(string(entry.Key),string(entry.Value))
		}

		return nil
	}); err != nil {
	log.Println(err)
}
```