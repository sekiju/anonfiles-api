## anonfile-api
Unofficial API wrapper for anonfiles.com

### Installation
```bash
npm i --save @sekiju/anonfiles-api
```

### Example
```javascript
import { uploadAnonFile } from "@sekiju/anonfiles-api"

/* FileObject | PathToFile */
const res = uploadAnonFile("./files/image.png")
```