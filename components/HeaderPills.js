import PillButton from "./PillButton";

export default function HeaderPills(){

  const infoForPills = [
    {
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      pillname:"product",
      pillroute: "/category/entertainment"
    }
  ]


  return(
    <div className="x-scrollbar flex flex-row max-w-full flex-no-wrap overflow-scroll lg:overflow-x-hidden bg-opacity-0">
      {infoForPills.map(data => {
        return (
          <PillButton pillname={data.pillname} pillroute={data.pillroute}/>
        )
      })}
    </div>
  )
};