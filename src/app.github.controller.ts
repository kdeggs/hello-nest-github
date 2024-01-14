import { Controller, Get, Param } from '@nestjs/common';
import { AppGithubService } from './app.github.service';

@Controller('github')
export class AppGithubController {
  constructor(private readonly githubService: AppGithubService) {}

  @Get(':owner/:repository/:file')
  getFile(
    @Param('owner') owner: string,
    @Param('repository') repository: string,
    @Param('file') file: string,
  ) {
    return this.githubService.getRepositoryFile(owner, repository, file);
  }
}
