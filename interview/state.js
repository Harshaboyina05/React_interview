class Greetings extends React.component{
    state={
        name: "World!"
    }
    updateName(){
        this.setState({name:"Hiiiii!"})
    }
    render(){
        return(
            <div>{this.state.name}</div>
        )
    }
}