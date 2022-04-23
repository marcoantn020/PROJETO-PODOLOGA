import { EntityRepository, Repository } from "typeorm";
import Tasks from "../models/Tasks";

@EntityRepository(Tasks)
class TasksRepository extends Repository<Tasks> {

}

export default TasksRepository