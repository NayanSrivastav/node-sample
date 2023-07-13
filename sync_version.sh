version=$(mvn help:evaluate -Dexpression=project.version -q -DforceStdout)
echo $version

npm pkg set 'version'=$version
git add package.json
git commit -m "synced app version"

branch=$(git branch --show-current)
git push origin $branch
echo "node app version has been update to $version, changes have been pushed to origin branch $branch"