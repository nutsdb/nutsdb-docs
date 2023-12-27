"use strict";(self.webpackChunknutsdb=self.webpackChunknutsdb||[]).push([[413],{1450:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=r(5893),i=r(1151);const l={},s="\u4f7f\u7528\u5217\u8868",c={id:"tutorial/list",title:"\u4f7f\u7528\u5217\u8868",description:"RPush",source:"@site/docs/tutorial/list.md",sourceDirName:"tutorial",slug:"/tutorial/list",permalink:"/nutsdb-docs/en/docs/tutorial/list",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/list.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u952e\u503c\u5bf9",permalink:"/nutsdb-docs/en/docs/tutorial/kv"},next:{title:"\u4f7f\u7528\u96c6\u5408",permalink:"/nutsdb-docs/en/docs/tutorial/set"}},d={},u=[{value:"RPush",id:"rpush",level:2},{value:"LPush",id:"lpush",level:2},{value:"LPop",id:"lpop",level:2},{value:"LPeek",id:"lpeek",level:2},{value:"RPop",id:"rpop",level:2},{value:"RPeek",id:"rpeek",level:2},{value:"LRange",id:"lrange",level:2},{value:"LRem",id:"lrem",level:2},{value:"LRemByIndex",id:"lrembyindex",level:2},{value:"LTrim",id:"ltrim",level:2},{value:"LSize",id:"lsize",level:2},{value:"LKeys",id:"lkeys",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u4f7f\u7528\u5217\u8868",children:"\u4f7f\u7528\u5217\u8868"}),"\n",(0,t.jsx)(n.h2,{id:"rpush",children:"RPush"}),"\n",(0,t.jsx)(n.p,{children:"\u4ece\u6307\u5b9abucket\u91cc\u9762\u7684\u6307\u5b9a\u961f\u5217key\u7684\u53f3\u8fb9\u5165\u961f\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5143\u7d20val\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if err := db.Update(\n    func(tx *nutsdb.Tx) error {\n        bucket := "bucketForList"\n        key := []byte("myList")\n        val := []byte("val1")\n        return tx.RPush(bucket, key, val)\n    }); err != nil {\n    log.Fatal(err)\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"lpush",children:"LPush"}),"\n",(0,t.jsx)(n.p,{children:"\u4ece\u6307\u5b9abucket\u91cc\u9762\u7684\u6307\u5b9a\u961f\u5217key\u7684\u5de6\u8fb9\u5165\u961f\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5143\u7d20val\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if err := db.Update(\n    func(tx *nutsdb.Tx) error {\n            bucket := "bucketForList"\n        key := []byte("myList")\n        val := []byte("val2")\n        return tx.LPush(bucket, key, val)\n    }); err != nil {\n    log.Fatal(err)\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"lpop",children:"LPop"}),"\n",(0,t.jsx)(n.p,{children:"\u4ece\u6307\u5b9abucket\u91cc\u9762\u7684\u6307\u5b9a\u961f\u5217key\u7684\u5de6\u8fb9\u51fa\u961f\u4e00\u4e2a\u5143\u7d20\uff0c\u5220\u9664\u5e76\u8fd4\u56de\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if err := db.Update(\n    func(tx *nutsdb.Tx) error {\n            bucket := "bucketForList"\n        key := []byte("myList")\n        if item, err := tx.LPop(bucket, key); err != nil {\n            return err\n        } else {\n            fmt.Println("LPop item:", string(item))\n        }\n        return nil\n    }); err != nil {\n    log.Fatal(err)\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"lpeek",children:"LPeek"}),"\n",(0,t.jsx)(n.p,{children:"\u4ece\u6307\u5b9abucket\u91cc\u9762\u7684\u6307\u5b9a\u961f\u5217key\u7684\u5de6\u8fb9\u51fa\u961f\u4e00\u4e2a\u5143\u7d20\u8fd4\u56de\u4e0d\u5220\u9664\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if err := db.View(\n    func(tx *nutsdb.Tx) error {\n            bucket := "bucketForList"\n        key := []byte("myList")\n        if item, err := tx.LPeek(bucket, key); err != nil {\n            return err\n        } else {\n            fmt.Println("LPeek item:", string(item)) //val11\n        }\n        return nil\n    }); err != nil {\n    log.Fatal(err)\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"rpop",children:"RPop"}),"\n",(0,t.jsx)(n.p,{children:"\u4ece\u6307\u5b9abucket\u91cc\u9762\u7684\u6307\u5b9a\u961f\u5217key\u7684\u53f3\u8fb9\u51fa\u961f\u4e00\u4e2a\u5143\u7d20\uff0c\u5220\u9664\u5e76\u8fd4\u56de\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if err := db.Update(\n    func(tx *nutsdb.Tx) error {\n            bucket := "bucketForList"\n        key := []byte("myList")\n        if item, err := tx.RPop(bucket, key); err != nil {\n            return err\n        } else {\n            fmt.Println("RPop item:", string(item))\n        }\n        return nil\n    }); err != nil {\n    log.Fatal(err)\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"rpeek",children:"RPeek"}),"\n",(0,t.jsx)(n.p,{children:"\u4ece\u6307\u5b9abucket\u91cc\u9762\u7684\u6307\u5b9a\u961f\u5217key\u7684\u53f3\u8fb9\u51fa\u961f\u4e00\u4e2a\u5143\u7d20\u8fd4\u56de\u4e0d\u5220\u9664\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if err := db.View(\n    func(tx *nutsdb.Tx) error {\n            bucket := "bucketForList"\n        key := []byte("myList")\n        if item, err := tx.RPeek(bucket, key); err != nil {\n            return err\n        } else {\n            fmt.Println("RPeek item:", string(item))\n        }\n        return nil\n    }); err != nil {\n    log.Fatal(err)\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"lrange",children:"LRange"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u6307\u5b9abucket\u91cc\u9762\u7684\u6307\u5b9a\u961f\u5217key\u5217\u8868\u91cc\u6307\u5b9a\u8303\u56f4\u5185\u7684\u5143\u7d20\u3002 start \u548c end \u504f\u79fb\u91cf\u90fd\u662f\u57fa\u4e8e0\u7684\u4e0b\u6807\uff0c\u5373list\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e0b\u6807\u662f0\uff08list\u7684\u8868\u5934\uff09\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u4e0b\u6807\u662f1\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002\n\u504f\u79fb\u91cf\u4e5f\u53ef\u4ee5\u662f\u8d1f\u6570\uff0c\u8868\u793a\u504f\u79fb\u91cf\u662f\u4ecelist\u5c3e\u90e8\u5f00\u59cb\u8ba1\u6570\u3002 \u4f8b\u5982\uff1a-1 \u8868\u793a\u5217\u8868\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\uff0c-2 \u662f\u5012\u6570\u7b2c\u4e8c\u4e2a\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if err := db.View(\n    func(tx *nutsdb.Tx) error {\n            bucket := "bucketForList"\n        key := []byte("myList")\n        if items, err := tx.LRange(bucket, key, 0, -1); err != nil {\n            return err\n        } else {\n            //fmt.Println(items)\n            for _, item := range items {\n                fmt.Println(string(item))\n            }\n        }\n        return nil\n    }); err != nil {\n    log.Fatal(err)\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"lrem",children:"LRem"}),"\n",(0,t.jsx)(n.p,{children:"\u6ce8\u610f: \u8fd9\u4e2a\u65b9\u6cd5\u5728 v0.6.0\u7248\u672c\u5f00\u59cb\u652f\u6301\uff0c\u4e4b\u524d\u7684\u7248\u672c\u5b9e\u73b0\u548c\u63cf\u8ff0\u6709\u95ee\u9898\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4ece\u6307\u5b9abucket\u91cc\u9762\u7684\u6307\u5b9a\u7684key\u7684\u5217\u8868\u91cc\u79fb\u9664\u524d count \u6b21\u51fa\u73b0\u7684\u503c\u4e3a value \u7684\u5143\u7d20\u3002 \u8fd9\u4e2a count \u53c2\u6570\u901a\u8fc7\u4e0b\u9762\u51e0\u79cd\u65b9\u5f0f\u5f71\u54cd\u8fd9\u4e2a\u64cd\u4f5c\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"count > 0: \u4ece\u5934\u5f80\u5c3e\u79fb\u9664\u503c\u4e3a value \u7684\u5143\u7d20\u3002\ncount < 0: \u4ece\u5c3e\u5f80\u5934\u79fb\u9664\u503c\u4e3a value \u7684\u5143\u7d20\u3002\ncount = 0: \u79fb\u9664\u6240\u6709\u503c\u4e3a value \u7684\u5143\u7d20\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u9762\u7684\u4f8b\u5b50count=1\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if err := db.Update(\n    func(tx *nutsdb.Tx) error {\n            bucket := "bucketForList"\n        key := []byte("myList")\n        return tx.LRem(bucket, key, 1, []byte("val11"))\n    }); err != nil {\n    log.Fatal(err)\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"lrembyindex",children:"LRemByIndex"}),"\n",(0,t.jsx)(n.p,{children:"\u6ce8\u610f: \u8fd9\u4e2a\u65b9\u6cd5\u5728 v0.10.0\u7248\u672c\u5f00\u59cb\u652f\u6301"}),"\n",(0,t.jsx)(n.p,{children:"\u79fb\u9664\u5217\u8868\u4e2d\u6307\u5b9a\u4f4d\u7f6e\uff08\u5355\u4e2a\u6216\u591a\u4e2a\u4f4d\u7f6e\uff09\u7684\u5143\u7d20"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if err := db.Update(\n    func(tx *nutsdb.Tx) error {\n        bucket := "bucketForList"\n        key := []byte("myList")\n        removedNum, err := tx.LRemByIndex(bucket, key, 0, 1)\n        fmt.Printf("removed num %d\\n", removedNum)\n        return err\n    }); err != nil {\n    log.Fatal(err)\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ltrim",children:"LTrim"}),"\n",(0,t.jsx)(n.p,{children:"\u4fee\u526a\u4e00\u4e2a\u5df2\u5b58\u5728\u7684 list\uff0c\u8fd9\u6837 list \u5c31\u4f1a\u53ea\u5305\u542b\u6307\u5b9a\u8303\u56f4\u7684\u6307\u5b9a\u5143\u7d20\u3002start \u548c stop \u90fd\u662f\u75310\u5f00\u59cb\u8ba1\u6570\u7684\uff0c \u8fd9\u91cc\u7684 0 \u662f\u5217\u8868\u91cc\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\uff08\u8868\u5934\uff09\uff0c1 \u662f\u7b2c\u4e8c\u4e2a\u5143\u7d20\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b\u5982\uff1a LTRIM foobar 0 2 \u5c06\u4f1a\u5bf9\u5b58\u50a8\u5728 foobar \u7684\u5217\u8868\u8fdb\u884c\u4fee\u526a\uff0c\u53ea\u4fdd\u7559\u5217\u8868\u91cc\u7684\u524d3\u4e2a\u5143\u7d20\u3002"}),"\n",(0,t.jsx)(n.p,{children:"start \u548c end \u4e5f\u53ef\u4ee5\u7528\u8d1f\u6570\u6765\u8868\u793a\u4e0e\u8868\u5c3e\u7684\u504f\u79fb\u91cf\uff0c\u6bd4\u5982 -1 \u8868\u793a\u5217\u8868\u91cc\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\uff0c -2 \u8868\u793a\u5012\u6570\u7b2c\u4e8c\u4e2a\uff0c\u7b49\u7b49\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if err := db.Update(\n    func(tx *nutsdb.Tx) error {\n            bucket := "bucketForList"\n        key := []byte("myList")\n        return tx.LTrim(bucket, key, 0, 1)\n    }); err != nil {\n    log.Fatal(err)\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"lsize",children:"LSize"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u6307\u5b9abucket\u4e0b\u6307\u5b9akey\u5217\u8868\u7684size\u5927\u5c0f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if err := db.Update(\n    func(tx *nutsdb.Tx) error {\n            bucket := "bucketForList"\n        key := []byte("myList")\n        if size,err := tx.LSize(bucket, key); err != nil {\n            return err\n        } else {\n            fmt.Println("myList size is ",size)\n        }\n        return nil\n    }); err != nil {\n    log.Fatal(err)\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"lkeys",children:"LKeys"}),"\n",(0,t.jsxs)(n.p,{children:["\u67e5\u627e",(0,t.jsx)(n.code,{children:"List"}),"\u7c7b\u578b\u7684\u6240\u6709\u5339\u914d\u6307\u5b9a\u6a21\u5f0f",(0,t.jsx)(n.code,{children:"pattern"}),"\u7684",(0,t.jsx)(n.code,{children:"key"}),"\uff0c\u7c7b\u4f3c\u4e8eRedis\u547d\u4ee4: ",(0,t.jsx)(n.a,{href:"https://redis.io/commands/keys/",children:"KEYS"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u6a21\u5f0f\u5339\u914d\u4f7f\u7528 Go \u6807\u51c6\u5e93\u7684",(0,t.jsx)(n.code,{children:"filepath.Match"}),"\uff0c\u90e8\u5206\u7ec6\u8282\u4e0a\u548credis\u7684\u884c\u4e3a\u6709\u533a\u522b\uff0c\u6bd4\u5982\u5bf9\u4e8e ",(0,t.jsx)(n.code,{children:"["})," \u7684\u5904\u7406\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if err := db.View(\n    func(tx *nutsdb.Tx) error {\n        var keys []string\n        err := tx.LKeys(bucket, "*", func(key string) bool {\n            keys = append(keys, key)\n            // true: continue, false: break\n            return true\n        })\n        fmt.Printf("keys: %v\\n", keys)\n        return err\n    }); err != nil {\n    log.Fatal(err)\n}\n'})})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>s});var t=r(7294);const i={},l=t.createContext(i);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);