import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { AssistanceRepository } from "../domain/assistance.repository";
import { CreateAssistanceDto } from "./dtos/create-assistance.dto";
import { FilterAssistancDto } from "./dtos/filter-assitances.dto";

@Injectable()
export class AssistancesService {
  constructor(private assistanceRepository: AssistanceRepository) { }
  
  public async getAssistances(filter: FilterAssistancDto) {
    const builder = this.assistanceRepository.createQueryBuilder();
    if (filter.enrollmentId) builder.where(`enrollmentId = :enrollmentId`, filter);
    if (filter.ids) builder.andWhereInIds(filter.ids);
    return await this.assistanceRepository.paginate(builder, filter);
  }

  public async createAssistance(createAssistanceDto: CreateAssistanceDto) {
    try {
      const newAssistance = this.assistanceRepository.create(createAssistanceDto);
      return await this.assistanceRepository.save(newAssistance);
    } catch (error) {
      throw new InternalServerErrorException("No se pudo guardar los datos");
    }
  }
}