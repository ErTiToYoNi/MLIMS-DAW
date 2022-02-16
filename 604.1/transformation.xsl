<?xsl version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="/">
    <html>
        <body>
            <h1><xsl:value-of select="secondary-school/name"/></h1>
            <xsl:apply-templates/>
    </body>
</html>
    </xsl:template>

    <xsl:template match="name">
    </xsl:template>

    <xsl:template match="web">
    </xsl:template>
    
    <xsl:template match="cycle">
        <p><xsl:value-of select="name"/></p>
    </xsl:template>

</xsl:stylesheet>
