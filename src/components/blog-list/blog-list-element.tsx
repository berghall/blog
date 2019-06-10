import * as React from "react"
import { Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import CardHeader from "@material-ui/core/CardHeader"

import Chips from "../shared/Chips"

import theme from "../../theme";

interface IBlogListElement {
  data: {
    slug: string
    date: string
    title: string
    tags: string[]
    description: string
    coverFluid: FluidObject | null
  }
}

export default ({ data }: IBlogListElement) => (
  <div style={{ marginTop: 25, marginBottom: 25 }}>
    <Card>
      <CardActionArea>
        <Link
          to={data.slug}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                style={{ 
                  backgroundColor: theme.blogListElement.avatar.backgroundColor,
                  color: theme.blogListElement.avatar.color, 
                  textShadow: "none" 
                }}
              >
                {data.title.charAt(0).toUpperCase()}
              </Avatar>
            }
            title={data.title}
            subheader={data.date}
          />
          {data.coverFluid ? <Image fluid={data.coverFluid} /> : null}
          <CardContent>
            <Typography component="p">{data.description}</Typography>
            <Chips labels={data.tags} />
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  </div>
)
