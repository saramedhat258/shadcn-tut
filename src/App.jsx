import { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "./components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import { Button } from "./components/ui/button"
import Loding from "./Loding"

function App() {
  const [recipes, setRecipes] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:4000/recipes')
      .then(res => res.json())
      .then(data => setTimeout(() => {
        setloading(false)
        setRecipes(data)
      }, 3000))
  }, [])

  return (
    <>
      <div className="w-3/4 m-auto">
        <h1 className="text-4xl font-bold my-7">Recipes of Sara</h1>
        {loading ?
          <Loding />
          : <div className="grid grid-cols-3 gap-8 ">
            {recipes.map(r => (
              <Card key={r.id} className="flex flex-col justify-between">
                <CardHeader className="flex-row gap-4 items-center">
                  <Avatar>
                    <AvatarImage src={`/img/${r.image}`} alt="recipe image" />
                    <AvatarFallback>
                      {r.title.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{r.title}</CardTitle>
                    <CardDescription>{r.time} mins to cook.</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{r.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button>View Recipe</Button>
                  {r.vegan && <Badge variant="secondary">Vegan!</Badge>}
                </CardFooter>
              </Card>
            ))}
          </div>
        }
      </div>

    </>
  )
}

export default App
