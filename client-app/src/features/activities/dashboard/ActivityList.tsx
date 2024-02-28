import React, { SyntheticEvent, useState } from "react";
import { Activity } from "../../../app/models/activity";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/api/LoadingComponents";

interface Props{
    activities:Activity[],
    selectedActivity: Activity | undefined,
    selectActivity:(id:string)=>void;
    cancelSelectActivity:()=>void;
    deleteActivity:(id: string)=>void;
    submitting: boolean;
}
export default function ActivityList({activities, selectedActivity, selectActivity, cancelSelectActivity,deleteActivity,submitting}:Props){
    
    const [target,setTarget]=useState('')
    
    function handleActivityDelete(e:SyntheticEvent<HTMLButtonElement>,id:string){
        setTarget(e.currentTarget.name);
        deleteActivity(id)
    }
    return(
<Segment>
    <Item.Group divided>
{activities.map(activity=>(
    <Item key={activity.id}>
        <Item.Content>
            <Item.Header as ='a'>{activity.title}</Item.Header>
            <Item.Meta>{activity.date}</Item.Meta>
            <Item.Description>
            <div>{activity.description}</div>
            <div>{activity.city},{activity.venue}</div>
            </Item.Description>
            <Item.Extra>
            <Label basic content={activity.category}></Label>
                <Button onClick={()=>selectActivity(activity.id)} floated='right' content='view' color='blue'>
                
                    </Button> 
                    <Button 
                    name={activity.id} 
                    loading={submitting && target === activity.id} 
                    onClick={(e)=>handleActivityDelete(e,activity.id)} 
                    floated='right' 
                    content='delete'
                    color='red'></Button>
            </Item.Extra>
        </Item.Content>
    </Item>
))}
    </Item.Group>
</Segment>
    )
}