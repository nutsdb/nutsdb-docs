# 桶与基本操作

## Bucket

桶。
1. 在一个桶内，所以键值对的key不能重复。
2. 多个桶之间的数据相互不影响。

利用桶的特性，以支持业务的逻辑/组件层面的隔离。

例子：

以键值对为例(非数据结构) 

```golang

key := []byte("key001")
val := []byte("val001")

bucket001 := "bucket001"
if err := db.Update(
	func(tx *nutsdb.Tx) error {
		if err := tx.Put(bucket001, key, val, 0); err != nil {
			return err
		}
		return nil
	}); err != nil {
	log.Fatal(err)
}

bucket002 := "bucket002"
if err := db.Update(
	func(tx *nutsdb.Tx) error {
		if err := tx.Put(bucket002, key, val, 0); err != nil {
			return err
		}
		return nil
	}); err != nil {
	log.Fatal(err)
}

### Tips

> bucket(桶)支持多索引结构,多索引结构间的key值隔离。

```go

if err := db.View(
	func(tx *nutsdb.Tx) error {
		return tx.IterateBuckets(nutsdb.DataStructureBPTree, func(bucket string) {
			fmt.Println("bucket: ", bucket)
		})
	}); err != nil {
	log.Fatal(err)
}
```
#### 迭代buckets

IterateBuckets支持迭代指定ds的迭代。

```go

if err := db.View(
	func(tx *nutsdb.Tx) error {
		return tx.IterateBuckets(nutsdb.DataStructureBPTree, func(bucket string) {
			fmt.Println("bucket: ", bucket)
		})
	}); err != nil {
	log.Fatal(err)
}
```

#### 删除bucket

DeleteBucket支持删除指定的bucket，需要两个参数`ds`和`bucket`。

```go

if err := db.Update(
	func(tx *nutsdb.Tx) error {
		return tx.DeleteBucket(nutsdb.DataStructureBPTree, bucket)
	}); err != nil {
	log.Fatal(err)
}
```




