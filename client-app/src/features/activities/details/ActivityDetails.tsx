import React from "react";
import { Card, CardContent,CardHeader,CardMeta,CardDescription, Image, Button } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/api/LoadingComponents";
import { observer } from "mobx-react-lite";



export default observer(function ActivityDetails(){
  const {activityStore} = useStore();
  const {selectedActivity:activity,openForm,cancelSelectedActivity}= activityStore;

  if(!activity) return <LoadingComponent/>;
    return(
        <Card fluid>
    <Image src={`/assests/categoryImages/${activity.category}.jpg`}/>
    <CardContent>
      <CardHeader>{activity.title}</CardHeader>
      <CardMeta>
        <span >{activity.date}</span>
      </CardMeta>
      <CardDescription>
        {activity.description}
      </CardDescription>
    </CardContent>
    <CardContent extra>
     <Button.Group widths='2'>
        <Button onClick={()=>openForm(activity.id)} basic color="blue" content='Edit'></Button>
        <Button onClick={cancelSelectedActivity} basic color="grey" content='Cancel'></Button>
     </Button.Group>
    </CardContent>
  </Card>
    )
})