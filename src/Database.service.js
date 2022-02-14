import { createClient } from '@supabase/supabase-js'

export default class DatabaseService {
  constructor() {
    const supabaseUrl = 'https://jtvigyuuymofgolvcbzx.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODQxNjExNiwiZXhwIjoxOTUzOTkyMTE2fQ.egrW0AjpYN2FRMLKwAMnCRjD4B73EdqQS4JG3jOMqvs'
    this.database = createClient(supabaseUrl, supabaseKey)
  }

  getInstance() {
    return this.database
  }
}
