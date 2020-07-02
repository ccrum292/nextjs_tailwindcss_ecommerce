import PillButton from "./PillButton";

export default function HeaderPills(){

  const infoForPills = [
    {
      id: 1,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 2,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 3,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 4,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 5,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 6,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 7,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 8,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 9,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 10,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 11,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 12,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 13,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 14,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 15,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 16,
      pillname:"product",
      pillroute: "/category/entertainment"
    }
  ]


  return(
    <div className="jost x-scrollbar flex flex-row max-w-full flex-no-wrap overflow-scroll lg:overflow-x-hidden bg-opacity-0">
      {infoForPills.map(data => {
        return (
          <PillButton key={data.id} pillname={data.pillname} pillroute={data.pillroute}/>
        )
      })}
    </div>
  )
};