---
trigger: always_on
---

# BAD

function Component(props:any){
  return <div onClick={()=>doSomething(props.data)}>Click</div>
}

# GOOD

interface ComponentProps {
  data: User
  onClick: () => void
}

export const Component = ({ data, onClick }: ComponentProps) => {
  return (
    <button onClick={onClick}>
      {data.name}
    </button>
  )
}


# ESLint + Prettier Rules

{
  "rules": {
    "react/function-component-definition": "error",
    "no-inline-styles": "error",
    "complexity": ["warn", 10]
  }
}


#