#!/usr/bin/env python3

import git_filter_repo as fr

def callback(commit, metadata):
    if commit.author_email == b"kasia@openline.ai" or commit.author_name == b"kasia9090":
        commit.author_name = b"katarzyna-marciniszyn"
        commit.author_email = b"marciniszyn.k@gmail.com"
    if commit.committer_email == b"kasia@openline.ai" or commit.committer_name == b"kasia9090":
        commit.committer_name = b"katarzyna-marciniszyn"
        commit.committer_email = b"marciniszyn.k@gmail.com"

args = fr.FilteringOptions.parse_args(['--force'])
filter = fr.RepoFilter(args, commit_callback=callback)
filter.run()
