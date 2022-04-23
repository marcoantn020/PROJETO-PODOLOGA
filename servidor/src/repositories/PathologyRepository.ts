import { EntityRepository, Repository } from "typeorm";
import Pathologies from "../models/Pathologies";

@EntityRepository(Pathologies)
class PathologyRepository extends Repository<Pathologies> {

}

export default PathologyRepository