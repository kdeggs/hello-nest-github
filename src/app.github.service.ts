import { ConfigService } from '@nestjs/config';
import { Octokit } from 'octokit';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppGithubService {
  private readonly logger = new Logger(AppGithubService.name);
  readonly octokit: Octokit;

  constructor(configService: ConfigService) {
    this.octokit = new Octokit({ auth: configService.get('GITHUB_API_KEY') });
  }

  async getRepositoryFile(
    owner: string,
    repository: string,
    file: string,
  ): Promise<any> {
    this.logger.log(
      `Trying to retrieve file at ${owner}/${repository}/${file}`,
    );
    return this.octokit.rest.repos
      .getContent({
        owner: owner,
        repo: repository,
        path: file,
      })
      .then((response) => {
        this.logger.log('File was found!');
        const data = (response.data as any).content;

        return Buffer.from(data, 'base64').toString();
      });
  }
}
