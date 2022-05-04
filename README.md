## @sekiju/anonfiles-api
Unofficial API wrapper for anonfiles.com

### Installation
```bash
npm i --save @sekiju/anonfiles-api
```
### Functions
```
uploadAnonFile(content: string | File | Blob): Promise<SuccessfulResponse | ErrorResponse>
    
getAnonInfo(id: string): Promise<SuccessfulResponse | ErrorResponse> 
```

### Example
```javascript
import { uploadAnonFile } from "@sekiju/anonfiles-api"

/* FileObject | PathToFile */
const res = uploadAnonFile("./files/image.png")
```